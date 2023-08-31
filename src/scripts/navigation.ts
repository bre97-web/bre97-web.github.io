export const useNavigation = (label: string, path: string) => {
    return {
        label: label,
        path: path
    }
}

export const routerList = [
    useNavigation('homepage', '/'),
    useNavigation('repositories', '/repositories'),
]