export interface selectorDto {
    id: number;
    name: string;
    parentId?: number;
    children?: selectorDto[];
    selected?: boolean;
    indeterminate?: boolean;
    parent?: selectorDto;
  }