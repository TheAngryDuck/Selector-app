package com.example.Selector.app.Interface;

import com.example.Selector.app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository  extends JpaRepository<User, Long> {
}
