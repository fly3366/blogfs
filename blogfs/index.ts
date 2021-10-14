import { FSCreate } from "./create"
import { FSFtruncate } from "./ftruncate"
import { FSGetattr } from "./getattr"
import { FSMkdir } from "./mkdir"
import { FSMknod } from "./mknod"
import { FSOpen } from "./open"
import { FSRead } from "./read"
import { FSReaddir } from "./readdir"
import { FSRename } from "./rename"
import { FSRmdir } from "./rmdir"
import { FSStatfs } from "./statfs"
import { FSUnlink } from "./unlink"
import { FSUtimens } from "./utimens"
import { FSWrite } from "./write"

export const CreateFS = () => {
  return Object.assign(
    FSCreate(),
    FSFtruncate(),
    FSGetattr(),
    FSMkdir(),
    FSMknod(),
    FSOpen(),
    FSRead(),
    FSReaddir(),
    FSRename(),
    FSRmdir(),
    FSStatfs(),
    FSUnlink(),
    FSUtimens(),
    FSWrite()
  )
}