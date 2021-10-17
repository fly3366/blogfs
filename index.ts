import Fuse from "fuse-native"
import * as Async from 'async'
import { CreateFS } from "./blogfs"
import path from "path"
import os from "os"

export const FSMount = (mountPath: string, opts: any, cb: any) => {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || (() => { })

  Async.series([
    Async.asyncify(() => {
      new Fuse(mountPath, CreateFS(), opts.fuse).mount((err: any) => {
        if (err) {
          return cb(err)
        }

        cb(null, {})
      })
    })
  ], cb)
}

export const FSUnmount = (mountPath: string, cb: any) => {
  cb = cb || (() => { })

  Fuse.unmount(mountPath, (err: any) => {
    if (err) {
      return cb(err)
    }
    cb()
  })
}

const mountPath = process.platform !== 'win32'
  ? path.join(os.homedir(), 'blogfs')
  : 'I:\\'

FSMount(mountPath, {
  fuse: { displayFolder: true, force: true }
}, (err: any) => {
  if (err) return console.error(err.message)
  console.log(`Mounted blogfs filesystem on ${mountPath}`)
})

let destroyed = false

process.on('SIGINT', () => {
  if (destroyed) return

  destroyed = true

  FSUnmount(mountPath, (err: any) => {
    if (err) return console.error(err.message)
    console.log(`Unmounted blogfs filesystem at ${mountPath}`)

    process.exit(0)
  })
})
