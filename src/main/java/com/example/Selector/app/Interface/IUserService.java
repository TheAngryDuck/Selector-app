package com.example.Selector.app.Interface;

import com.example.Selector.app.entity.User;

public interface IUserService {
    User createUser(User user);

    User updateUser(User user);
}
