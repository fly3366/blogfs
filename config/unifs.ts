export enum UniMode {
    HASH,
    FIRST
}

export const UnifsConfig = {
    "mode": UniMode.HASH,
    "paths": [
        {
            "mnt": "/dev/shm/fake_storages/fake_meta_mnt_node1",
            "weight": 20
        },
        {
            "mnt": "/dev/shm/fake_storages/fake_meta_mnt_node2",
            "weight": 20
        },
        {
            "mnt": "/dev/shm/fake_storages/fake_meta_mnt_node3",
            "weight": 60
        }
    ]
}