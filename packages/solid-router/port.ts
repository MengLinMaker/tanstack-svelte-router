import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { portReactToSolid } from '@menglinmaker/react-solid-porter'
import { consola } from 'consola'
import { colorize } from 'consola/utils'
import { format } from 'prettier'
import { printUnifiedDiff } from 'print-diff'
import prettierOptions from '../../prettier.config'

const prettierFormatCode = (code: string) =>
  format(code, { parser: 'babel-ts', ...prettierOptions })

const getAllChildFiles = (dir: string) => {
  const results: Array<string> = []
  readdirSync(dir).forEach((file) => {
    const path = `${dir}/${file}`
    const stat = statSync(path)
    if (stat.isDirectory()) {
      for (const subPath of getAllChildFiles(path)) results.push(subPath)
    } else results.push(path)
  })
  return results
}

// Global source files
const sourceDir = '../react-router'
const destinationDir = '.'
const sourceFiles = [
  ...getAllChildFiles(`${sourceDir}/src`),
  ...getAllChildFiles(`${sourceDir}/tests`),
]

// Generate non-existent folders
{
  const destinationFiles = sourceFiles.map((e) =>
    e.replace(sourceDir, destinationDir),
  )
  for (const fileDir of destinationFiles) {
    const folderDir = fileDir.split('/').slice(0, -1).join('/')
    if (!existsSync(folderDir)) mkdirSync(folderDir)
  }
}

// Port code
{
  for (const file of sourceFiles) {
    const destinationFile = file.replace(sourceDir, destinationDir)
    const code = readFileSync(file).toString()
    const newPortCode = portReactToSolid(code)

    if (!newPortCode) {
      consola.warn(`Couldn't port ${file} to ${destinationFile}`)
      continue
    }
    const newCode = await prettierFormatCode(newPortCode)

    if (existsSync(destinationFile)) {
      const oldPortedCode = await prettierFormatCode(
        readFileSync(destinationFile).toString(),
      )

      if (oldPortedCode === newCode)
        consola.info(`Already ported ${file} to ${destinationFile}`)
      else {
        consola.warn(
          `Can update port ${colorize('blue', file)} to ${colorize('green', destinationFile)}`,
        )
        printUnifiedDiff(oldPortedCode, newCode)
      }
      continue
    }

    consola.info(
      `Ported ${colorize('blue', file)} to ${colorize('green', destinationFile)}`,
    )
    await writeFileSync(file.replace(sourceDir, destinationDir), newCode)
  }
}

consola.warn('Unsupported features')
Array.from(['React.ErrorInfo', 'React.LegacyRef', 'React.useRef']).map(
  (feature: string) => consola.info('-', colorize('red', feature)),
)
