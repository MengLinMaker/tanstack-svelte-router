/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/root'
import { Route as layoutImport } from './routes/layout'
import { Route as indexImport } from './routes/index'
import { Route as dbDashboardImport } from './routes/db/dashboard'
import { Route as HelloIndexImport } from './routes/subtree/index'
import { Route as dbDashboardInvoicesImport } from './routes/db/dashboard-invoices'
import { Route as dbDashboardIndexImport } from './routes/db/dashboard-index'
import { Route as HelloFooIndexImport } from './routes/subtree/foo/index'
import { Route as HelloFooIdImport } from './routes/subtree/foo/$id'
import { Route as dbInvoiceDetailImport } from './routes/db/invoice-detail'
import { Route as dbInvoicesIndexImport } from './routes/db/invoices-index'

// Create/Update Routes

const layoutRoute = layoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const indexRoute = indexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const dbDashboardRoute = dbDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => layoutRoute,
} as any)

const HelloIndexRoute = HelloIndexImport.update({
  id: '/hello/',
  path: '/hello/',
  getParentRoute: () => layoutRoute,
} as any)

const dbDashboardInvoicesRoute = dbDashboardInvoicesImport.update({
  id: '/invoices',
  path: '/invoices',
  getParentRoute: () => dbDashboardRoute,
} as any)

const dbDashboardIndexRoute = dbDashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => dbDashboardRoute,
} as any)

const HelloFooIndexRoute = HelloFooIndexImport.update({
  id: '/hello/foo/',
  path: '/hello/foo/',
  getParentRoute: () => layoutRoute,
} as any)

const HelloFooIdRoute = HelloFooIdImport.update({
  id: '/hello/foo/$id',
  path: '/hello/foo/$id',
  getParentRoute: () => layoutRoute,
} as any)

const dbInvoiceDetailRoute = dbInvoiceDetailImport.update({
  id: '/$id',
  path: '/$id',
  getParentRoute: () => dbDashboardInvoicesRoute,
} as any)

const dbInvoicesIndexRoute = dbInvoicesIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => dbDashboardInvoicesRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof indexImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof layoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/dashboard': {
      id: '/_layout/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof dbDashboardImport
      parentRoute: typeof layoutImport
    }
    '/_layout/dashboard/': {
      id: '/_layout/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof dbDashboardIndexImport
      parentRoute: typeof dbDashboardImport
    }
    '/_layout/dashboard/invoices': {
      id: '/_layout/dashboard/invoices'
      path: '/invoices'
      fullPath: '/dashboard/invoices'
      preLoaderRoute: typeof dbDashboardInvoicesImport
      parentRoute: typeof dbDashboardImport
    }
    '/_layout/hello/': {
      id: '/_layout/hello/'
      path: '/hello'
      fullPath: '/hello'
      preLoaderRoute: typeof HelloIndexImport
      parentRoute: typeof layoutImport
    }
    '/_layout/dashboard/invoices/': {
      id: '/_layout/dashboard/invoices/'
      path: '/'
      fullPath: '/dashboard/invoices/'
      preLoaderRoute: typeof dbInvoicesIndexImport
      parentRoute: typeof dbDashboardInvoicesImport
    }
    '/_layout/dashboard/invoices/$id': {
      id: '/_layout/dashboard/invoices/$id'
      path: '/$id'
      fullPath: '/dashboard/invoices/$id'
      preLoaderRoute: typeof dbInvoiceDetailImport
      parentRoute: typeof dbDashboardInvoicesImport
    }
    '/_layout/hello/foo/$id': {
      id: '/_layout/hello/foo/$id'
      path: '/hello/foo/$id'
      fullPath: '/hello/foo/$id'
      preLoaderRoute: typeof HelloFooIdImport
      parentRoute: typeof layoutImport
    }
    '/_layout/hello/foo/': {
      id: '/_layout/hello/foo/'
      path: '/hello/foo'
      fullPath: '/hello/foo'
      preLoaderRoute: typeof HelloFooIndexImport
      parentRoute: typeof layoutImport
    }
  }
}

// Create and export the route tree

interface dbDashboardInvoicesRouteChildren {
  dbInvoicesIndexRoute: typeof dbInvoicesIndexRoute
  dbInvoiceDetailRoute: typeof dbInvoiceDetailRoute
}

const dbDashboardInvoicesRouteChildren: dbDashboardInvoicesRouteChildren = {
  dbInvoicesIndexRoute: dbInvoicesIndexRoute,
  dbInvoiceDetailRoute: dbInvoiceDetailRoute,
}

const dbDashboardInvoicesRouteWithChildren =
  dbDashboardInvoicesRoute._addFileChildren(dbDashboardInvoicesRouteChildren)

interface dbDashboardRouteChildren {
  dbDashboardIndexRoute: typeof dbDashboardIndexRoute
  dbDashboardInvoicesRoute: typeof dbDashboardInvoicesRouteWithChildren
}

const dbDashboardRouteChildren: dbDashboardRouteChildren = {
  dbDashboardIndexRoute: dbDashboardIndexRoute,
  dbDashboardInvoicesRoute: dbDashboardInvoicesRouteWithChildren,
}

const dbDashboardRouteWithChildren = dbDashboardRoute._addFileChildren(
  dbDashboardRouteChildren,
)

interface layoutRouteChildren {
  dbDashboardRoute: typeof dbDashboardRouteWithChildren
  HelloIndexRoute: typeof HelloIndexRoute
  HelloFooIdRoute: typeof HelloFooIdRoute
  HelloFooIndexRoute: typeof HelloFooIndexRoute
}

const layoutRouteChildren: layoutRouteChildren = {
  dbDashboardRoute: dbDashboardRouteWithChildren,
  HelloIndexRoute: HelloIndexRoute,
  HelloFooIdRoute: HelloFooIdRoute,
  HelloFooIndexRoute: HelloFooIndexRoute,
}

const layoutRouteWithChildren =
  layoutRoute._addFileChildren(layoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof indexRoute
  '': typeof layoutRouteWithChildren
  '/dashboard': typeof dbDashboardRouteWithChildren
  '/dashboard/': typeof dbDashboardIndexRoute
  '/dashboard/invoices': typeof dbDashboardInvoicesRouteWithChildren
  '/hello': typeof HelloIndexRoute
  '/dashboard/invoices/': typeof dbInvoicesIndexRoute
  '/dashboard/invoices/$id': typeof dbInvoiceDetailRoute
  '/hello/foo/$id': typeof HelloFooIdRoute
  '/hello/foo': typeof HelloFooIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof indexRoute
  '': typeof layoutRouteWithChildren
  '/dashboard': typeof dbDashboardIndexRoute
  '/hello': typeof HelloIndexRoute
  '/dashboard/invoices': typeof dbInvoicesIndexRoute
  '/dashboard/invoices/$id': typeof dbInvoiceDetailRoute
  '/hello/foo/$id': typeof HelloFooIdRoute
  '/hello/foo': typeof HelloFooIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof indexRoute
  '/_layout': typeof layoutRouteWithChildren
  '/_layout/dashboard': typeof dbDashboardRouteWithChildren
  '/_layout/dashboard/': typeof dbDashboardIndexRoute
  '/_layout/dashboard/invoices': typeof dbDashboardInvoicesRouteWithChildren
  '/_layout/hello/': typeof HelloIndexRoute
  '/_layout/dashboard/invoices/': typeof dbInvoicesIndexRoute
  '/_layout/dashboard/invoices/$id': typeof dbInvoiceDetailRoute
  '/_layout/hello/foo/$id': typeof HelloFooIdRoute
  '/_layout/hello/foo/': typeof HelloFooIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/dashboard'
    | '/dashboard/'
    | '/dashboard/invoices'
    | '/hello'
    | '/dashboard/invoices/'
    | '/dashboard/invoices/$id'
    | '/hello/foo/$id'
    | '/hello/foo'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/dashboard'
    | '/hello'
    | '/dashboard/invoices'
    | '/dashboard/invoices/$id'
    | '/hello/foo/$id'
    | '/hello/foo'
  id:
    | '__root__'
    | '/'
    | '/_layout'
    | '/_layout/dashboard'
    | '/_layout/dashboard/'
    | '/_layout/dashboard/invoices'
    | '/_layout/hello/'
    | '/_layout/dashboard/invoices/'
    | '/_layout/dashboard/invoices/$id'
    | '/_layout/hello/foo/$id'
    | '/_layout/hello/foo/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  indexRoute: typeof indexRoute
  layoutRoute: typeof layoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  indexRoute: indexRoute,
  layoutRoute: layoutRouteWithChildren,
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
        "/_layout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout": {
      "filePath": "layout.tsx",
      "children": [
        "/_layout/dashboard",
        "/_layout/hello/",
        "/_layout/hello/foo/$id",
        "/_layout/hello/foo/"
      ]
    },
    "/_layout/dashboard": {
      "filePath": "db/dashboard.tsx",
      "parent": "/_layout",
      "children": [
        "/_layout/dashboard/",
        "/_layout/dashboard/invoices"
      ]
    },
    "/_layout/dashboard/": {
      "filePath": "db/dashboard-index.tsx",
      "parent": "/_layout/dashboard"
    },
    "/_layout/dashboard/invoices": {
      "filePath": "db/dashboard-invoices.tsx",
      "parent": "/_layout/dashboard",
      "children": [
        "/_layout/dashboard/invoices/",
        "/_layout/dashboard/invoices/$id"
      ]
    },
    "/_layout/hello/": {
      "filePath": "subtree/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/dashboard/invoices/": {
      "filePath": "db/invoices-index.tsx",
      "parent": "/_layout/dashboard/invoices"
    },
    "/_layout/dashboard/invoices/$id": {
      "filePath": "db/invoice-detail.tsx",
      "parent": "/_layout/dashboard/invoices"
    },
    "/_layout/hello/foo/$id": {
      "filePath": "subtree/foo/$id.tsx",
      "parent": "/_layout"
    },
    "/_layout/hello/foo/": {
      "filePath": "subtree/foo/index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */