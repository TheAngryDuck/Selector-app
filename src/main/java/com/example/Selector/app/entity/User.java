package com.example.Selector.app.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "selectors")
    private long[] selectors;

    @Column(name = "att")
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
