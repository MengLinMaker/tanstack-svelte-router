/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/root'
import { Route as postsPostsImport } from './routes/posts/posts'
import { Route as layoutFirstLayoutImport } from './routes/layout/first-layout'
import { Route as homeImport } from './routes/home'
import { Route as postsPostsDetailImport } from './routes/posts/posts-detail'
import { Route as layoutSecondLayoutImport } from './routes/layout/second-layout'
import { Route as postsPostsHomeImport } from './routes/posts/posts-home'
import { Route as ClassicHelloRouteImport } from './routes/file-based-subtree/hello/route'
import { Route as ClassicHelloIndexImport } from './routes/file-based-subtree/hello/index'
import { Route as ClassicHelloWorldImport } from './routes/file-based-subtree/hello/world'
import { Route as ClassicHelloUniverseImport } from './routes/file-based-subtree/hello/universe'
import { Route as bImport } from './routes/b'
import { Route as aImport } from './routes/a'

// Create Virtual Routes

const Import = createFileRoute('/_first/_second-layout/route-without-file')()

// Create/Update Routes

const postsPostsRoute = postsPostsImport.update({
  id: '/posts',
  path: '/posts',
  getParentRoute: () => rootRoute,
} as any)

const layoutFirstLayoutRoute = layoutFirstLayoutImport.update({
  id: '/_first',
  getParentRoute: () => rootRoute,
} as any)

const homeRoute = homeImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const postsPostsDetailRoute = postsPostsDetailImport.update({
  id: '/$postId',
  path: '/$postId',
  getParentRoute: () => postsPostsRoute,
} as any)

const layoutSecondLayoutRoute = layoutSecondLayoutImport.update({
  id: '/_second-layout',
  getParentRoute: () => layoutFirstLayoutRoute,
} as any)

const postsPostsHomeRoute = postsPostsHomeImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => postsPostsRoute,
} as any)

const ClassicHelloRouteRoute = ClassicHelloRouteImport.update({
  id: '/classic/hello',
  path: '/classic/hello',
  getParentRoute: () => rootRoute,
} as any)

const ClassicHelloIndexRoute = ClassicHelloIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => ClassicHelloRouteRoute,
} as any)

const ClassicHelloWorldRoute = ClassicHelloWorldImport.update({
  id: '/world',
  path: '/world',
  getParentRoute: () => ClassicHelloRouteRoute,
} as any)

const ClassicHelloUniverseRoute = ClassicHelloUniverseImport.update({
  id: '/universe',
  path: '/universe',
  getParentRoute: () => ClassicHelloRouteRoute,
} as any)

const Route = Import.update({
  id: '/route-without-file',
  path: '/route-without-file',
  getParentRoute: () => layoutSecondLayoutRoute,
} as any)

const bRoute = bImport.update({
  id: '/layout-b',
  path: '/layout-b',
  getParentRoute: () => Route,
} as any)

const aRoute = aImport.update({
  id: '/layout-a',
  path: '/layout-a',
  getParentRoute: () => Route,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof homeImport
      parentRoute: typeof rootRoute
    }
    '/_first': {
      id: '/_first'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutFirstLayoutImport
      parentRoute: typeof rootRoute
    }
    '/posts': {
      id: '/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof postsPostsImport
      parentRoute: typeof rootRoute
    }
    '/classic/hello': {
      id: '/classic/hello'
      path: '/classic/hello'
      fullPath: '/classic/hello'
      preLoaderRoute: typeof ClassicHelloRouteImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      id: '/posts/'
      path: '/'
      fullPath: '/posts/'
      preLoaderRoute: typeof postsPostsHomeImport
      parentRoute: typeof postsPostsImport
    }
    '/_first/_second-layout': {
      id: '/_first/_second-layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutSecondLayoutImport
      parentRoute: typeof layoutFirstLayoutImport
    }
    '/posts/$postId': {
      id: '/posts/$postId'
      path: '/$postId'
      fullPath: '/posts/$postId'
      preLoaderRoute: typeof postsPostsDetailImport
      parentRoute: typeof postsPostsImport
    }
    '/_first/_second-layout/route-without-file': {
      id: '/_first/_second-layout/route-without-file'
      path: '/route-without-file'
      fullPath: '/route-without-file'
      preLoaderRoute: typeof Import
      parentRoute: typeof layoutSecondLayoutImport
    }
    '/classic/hello/universe': {
      id: '/classic/hello/universe'
      path: '/universe'
      fullPath: '/classic/hello/universe'
      preLoaderRoute: typeof ClassicHelloUniverseImport
      parentRoute: typeof ClassicHelloRouteImport
    }
    '/classic/hello/world': {
      id: '/classic/hello/world'
      path: '/world'
      fullPath: '/classic/hello/world'
      preLoaderRoute: typeof ClassicHelloWorldImport
      parentRoute: typeof ClassicHelloRouteImport
    }
    '/classic/hello/': {
      id: '/classic/hello/'
      path: '/'
      fullPath: '/classic/hello/'
      preLoaderRoute: typeof ClassicHelloIndexImport
      parentRoute: typeof ClassicHelloRouteImport
    }
    '/_first/_second-layout/route-without-file/layout-a': {
      id: '/_first/_second-layout/route-without-file/layout-a'
      path: '/layout-a'
      fullPath: '/route-without-file/layout-a'
      preLoaderRoute: typeof aImport
      parentRoute: typeof rootRoute
    }
    '/_first/_second-layout/route-without-file/layout-b': {
      id: '/_first/_second-layout/route-without-file/layout-b'
      path: '/layout-b'
      fullPath: '/route-without-file/layout-b'
      preLoaderRoute: typeof bImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface RouteChildren {
  aRoute: typeof aRoute
  bRoute: typeof bRoute
}

const RouteChildren: RouteChildren = {
  aRoute: aRoute,
  bRoute: bRoute,
}

const RouteWithChildren = Route._addFileChildren(RouteChildren)

interface layoutSecondLayoutRouteChildren {
  Route: typeof RouteWithChildren
}

const layoutSecondLayoutRouteChildren: layoutSecondLayoutRouteChildren = {
  Route: RouteWithChildren,
}

const layoutSecondLayoutRouteWithChildren =
  layoutSecondLayoutRoute._addFileChildren(layoutSecondLayoutRouteChildren)

interface layoutFirstLayoutRouteChildren {
  layoutSecondLayoutRoute: typeof layoutSecondLayoutRouteWithChildren
}

const layoutFirstLayoutRouteChildren: layoutFirstLayoutRouteChildren = {
  layoutSecondLayoutRoute: layoutSecondLayoutRouteWithChildren,
}

const layoutFirstLayoutRouteWithChildren =
  layoutFirstLayoutRoute._addFileChildren(layoutFirstLayoutRouteChildren)

interface postsPostsRouteChildren {
  postsPostsHomeRoute: typeof postsPostsHomeRoute
  postsPostsDetailRoute: typeof postsPostsDetailRoute
}

const postsPostsRouteChildren: postsPostsRouteChildren = {
  postsPostsHomeRoute: postsPostsHomeRoute,
  postsPostsDetailRoute: postsPostsDetailRoute,
}

const postsPostsRouteWithChildren = postsPostsRoute._addFileChildren(
  postsPostsRouteChildren,
)

interface ClassicHelloRouteRouteChildren {
  ClassicHelloUniverseRoute: typeof ClassicHelloUniverseRoute
  ClassicHelloWorldRoute: typeof ClassicHelloWorldRoute
  ClassicHelloIndexRoute: typeof ClassicHelloIndexRoute
}

const ClassicHelloRouteRouteChildren: ClassicHelloRouteRouteChildren = {
  ClassicHelloUniverseRoute: ClassicHelloUniverseRoute,
  ClassicHelloWorldRoute: ClassicHelloWorldRoute,
  ClassicHelloIndexRoute: ClassicHelloIndexRoute,
}

const ClassicHelloRouteRouteWithChildren =
  ClassicHelloRouteRoute._addFileChildren(ClassicHelloRouteRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof homeRoute
  '': typeof layoutSecondLayoutRouteWithChildren
  '/posts': typeof postsPostsRouteWithChildren
  '/classic/hello': typeof ClassicHelloRouteRouteWithChildren
  '/posts/': typeof postsPostsHomeRoute
  '/posts/$postId': typeof postsPostsDetailRoute
  '/route-without-file': typeof RouteWithChildren
  '/classic/hello/universe': typeof ClassicHelloUniverseRoute
  '/classic/hello/world': typeof ClassicHelloWorldRoute
  '/classic/hello/': typeof ClassicHelloIndexRoute
  '/route-without-file/layout-a': typeof aRoute
  '/route-without-file/layout-b': typeof bRoute
}

export interface FileRoutesByTo {
  '/': typeof homeRoute
  '': typeof layoutSecondLayoutRouteWithChildren
  '/posts': typeof postsPostsHomeRoute
  '/posts/$postId': typeof postsPostsDetailRoute
  '/route-without-file': typeof RouteWithChildren
  '/classic/hello/universe': typeof ClassicHelloUniverseRoute
  '/classic/hello/world': typeof ClassicHelloWorldRoute
  '/classic/hello': typeof ClassicHelloIndexRoute
  '/route-without-file/layout-a': typeof aRoute
  '/route-without-file/layout-b': typeof bRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof homeRoute
  '/_first': typeof layoutFirstLayoutRouteWithChildren
  '/posts': typeof postsPostsRouteWithChildren
  '/classic/hello': typeof ClassicHelloRouteRouteWithChildren
  '/posts/': typeof postsPostsHomeRoute
  '/_first/_second-layout': typeof layoutSecondLayoutRouteWithChildren
  '/posts/$postId': typeof postsPostsDetailRoute
  '/_first/_second-layout/route-without-file': typeof RouteWithChildren
  '/classic/hello/universe': typeof ClassicHelloUniverseRoute
  '/classic/hello/world': typeof ClassicHelloWorldRoute
  '/classic/hello/': typeof ClassicHelloIndexRoute
  '/_first/_second-layout/route-without-file/layout-a': typeof aRoute
  '/_first/_second-layout/route-without-file/layout-b': typeof bRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/posts'
    | '/classic/hello'
    | '/posts/'
    | '/posts/$postId'
    | '/route-without-file'
    | '/classic/hello/universe'
    | '/classic/hello/world'
    | '/classic/hello/'
    | '/route-without-file/layout-a'
    | '/route-without-file/layout-b'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/posts'
    | '/posts/$postId'
    | '/route-without-file'
    | '/classic/hello/universe'
    | '/classic/hello/world'
    | '/classic/hello'
    | '/route-without-file/layout-a'
    | '/route-without-file/layout-b'
  id:
    | '__root__'
    | '/'
    | '/_first'
    | '/posts'
    | '/classic/hello'
    | '/posts/'
    | '/_first/_second-layout'
    | '/posts/$postId'
    | '/_first/_second-layout/route-without-file'
    | '/classic/hello/universe'
    | '/classic/hello/world'
    | '/classic/hello/'
    | '/_first/_second-layout/route-without-file/layout-a'
    | '/_first/_second-layout/route-without-file/layout-b'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  homeRoute: typeof homeRoute
  layoutFirstLayoutRoute: typeof layoutFirstLayoutRouteWithChildren
  postsPostsRoute: typeof postsPostsRouteWithChildren
  ClassicHelloRouteRoute: typeof ClassicHelloRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  homeRoute: homeRoute,
  layoutFirstLayoutRoute: layoutFirstLayoutRouteWithChildren,
  postsPostsRoute: postsPostsRouteWithChildren,
  ClassicHelloRouteRoute: ClassicHelloRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "root.tsx",
      "children": [
        "/",
        "/_first",
        "/posts",
        "/classic/hello"
      ]
    },
    "/": {
      "filePath": "home.tsx"
    },
    "/_first": {
      "filePath": "layout/first-layout.tsx",
      "children": [
        "/_first/_second-layout"
      ]
    },
    "/posts": {
      "filePath": "posts/posts.tsx",
      "children": [
        "/posts/",
        "/posts/$postId"
      ]
    },
    "/classic/hello": {
      "filePath": "file-based-subtree/hello/route.tsx",
      "children": [
        "/classic/hello/universe",
        "/classic/hello/world",
        "/classic/hello/"
      ]
    },
    "/posts/": {
      "filePath": "posts/posts-home.tsx",
      "parent": "/posts"
    },
    "/_first/_second-layout": {
      "filePath": "layout/second-layout.tsx",
      "parent": "/_first",
      "children": [
        "/_first/_second-layout/route-without-file"
      ]
    },
    "/posts/$postId": {
      "filePath": "posts/posts-detail.tsx",
      "parent": "/posts"
    },
    "/_first/_second-layout/route-without-file": {
      "filePath": "",
      "parent": "/_first/_second-layout",
      "children": [
        "/_first/_second-layout/route-without-file/layout-a",
        "/_first/_second-layout/route-without-file/layout-b"
      ]
    },
    "/classic/hello/universe": {
      "filePath": "file-based-subtree/hello/universe.tsx",
      "parent": "/classic/hello"
    },
    "/classic/hello/world": {
      "filePath": "file-based-subtree/hello/world.tsx",
      "parent": "/classic/hello"
    },
    "/classic/hello/": {
      "filePath": "file-based-subtree/hello/index.tsx",
      "parent": "/classic/hello"
    },
    "/_first/_second-layout/route-without-file/layout-a": {
      "filePath": "a.tsx",
      "parent": "/_first/_second-layout/route-without-file"
    },
    "/_first/_second-layout/route-without-file/layout-b": {
      "filePath": "b.tsx",
      "parent": "/_first/_second-layout/route-without-file"
    }
  }
}
ROUTE_MANIFEST_END */