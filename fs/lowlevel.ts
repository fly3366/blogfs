interface BlockDevice {}

// Or SASDevice
interface SCSIDevice {}

interface NVMEDevice {}

interface Block {
    buffer: Uint8Array[4096]
}

// gd refer to InodeTable/BlockBitmap/InodeBitmap
interface BlockGroup {
    gd: [number, number, number]
}

// may block 1 (0-4096)
interface SuperBlock {
    blockGroups: Array<BlockGroup>
    dev: SCSIDevice|NVMEDevice
}

// mount /dev/sda /mnt/storage01
interface VfsMount {
    pMount: VfsMount
    cMount: Array<VfsMount>
    superBlock: SuperBlock
    mountRoot: string // /
    mountPoint: string // storage01
}

// mounts
interface VfsMounts {
    namespace: string
    mounts: Array<VfsMount>
}

// link, recover file
interface DEntry {
    inode: number
    name: string
}

// fs impl
interface Inode {
    inode: number
    offset: number
    size: number
}

interface File {
    fd: number
    offset: number
    entry: DEntry
}

