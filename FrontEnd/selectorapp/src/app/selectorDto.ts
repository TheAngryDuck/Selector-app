export interface selectorDto{

        id?: number,
        name?: string,
        parentId?: number,
        children?: selectorDto[]
}