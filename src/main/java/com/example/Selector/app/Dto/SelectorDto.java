package com.example.Selector.app.Dto;

import java.util.List;

public class SelectorDto {

    private long id;

    private String name;

    private long parentId;

    private List<SelectorDto> children;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public long getParentId() {
        return parentId;
    }
    public void setParentId(long parentId) {
        this.parentId = parentId;
    }
    public void setChildren(List<SelectorDto> children){this.children = children;}
    public List<SelectorDto> getChildren(){return children;}

}
