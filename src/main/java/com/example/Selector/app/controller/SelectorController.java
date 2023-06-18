package com.example.Selector.app.controller;

import com.example.Selector.app.entity.Selector;
import com.example.Selector.app.entity.User;
import com.example.Selector.app.service.SelectorService;
import com.example.Selector.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SelectorController {

    @Autowired
    private SelectorService selectorService;

    @Autowired
    private UserService userService;

    @GetMapping("/selectors")
    public ResponseEntity<List<Selector>> getAllSelectors(){
        return ResponseEntity.ok().body(selectorService.getAllSelectors());
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        return ResponseEntity.ok().body(this.userService.createUser(user));
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User user){
        user.setId(id);
        return ResponseEntity.ok().body(this.userService.updateUser(user));
    }

}
