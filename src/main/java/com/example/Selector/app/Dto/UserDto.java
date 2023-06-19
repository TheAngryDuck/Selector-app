package com.example.Selector.app.Dto;

public class UserDto {

    private long id;

    private String name;

    private long[] selectors;

    private boolean agreeTermsConditions;

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
    public long[] getSelectors() {
        return selectors;
    }
    public void setSelectors(long[] selectors) {
        this.selectors = selectors;
    }
    public boolean getAgreeTermsConditions() {
        return agreeTermsConditions;
    }
    public void setAgreeTermsConditions(boolean agreeTermsConditions) {
        this.agreeTermsConditions = agreeTermsConditions;
    }
}
