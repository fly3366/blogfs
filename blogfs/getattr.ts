export const FSGetattr = () => {
  const now = Date.now()

  return {
    getattr (path: string, reply: any) {
        reply(0, {
          mtime: now,
          atime: now,
          ctime: now,
          nlink: 1,
          size: 1,
          mode: 'directory' ? 16877 : 33188,
          uid: process.getuid ? process.getuid() : 0,
          gid: process.getgid ? process.getgid() : 0
        })
    }
  }
}
