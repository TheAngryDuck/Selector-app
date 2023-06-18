package com.example.Selector.app.service;

import com.example.Selector.app.Interface.IUserRepository;
import com.example.Selector.app.Interface.IUserService;
import com.example.Selector.app.entity.User;
import com.example.Selector.app.exception.ResourceNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Transactional
public class UserService implements IUserService {

    @Autowired
    private IUserRepository userRepository;


    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        Optional<User> userDb = this.userRepository.findById(user.getId());

        if (userDb.isPresent()){
            User userUpdate = userDb.get();
            userUpdate.setId(user.getId());
            userUpdate.setName(user.getName());
            userUpdate.setSelectors(user.getSelectors());
            userUpdate.setAgreeTermsConditions(user.getAgreeTermsConditions());
            return userUpdate;
        }else{
            throw new ResourceNotFoundException("Record not found with id : " + user.getId());
        }
    }
}
