package com.example.Selector.app.controller;

import com.example.Selector.app.Dto.SelectorDto;
import com.example.Selector.app.entity.Selector;
import com.example.Selector.app.entity.User;
import com.example.Selector.app.helpers.SelectorControllerHelper;
import com.example.Selector.app.service.SelectorService;
import com.example.Selector.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SelectorController {

    @Autowired
    private SelectorService selectorService;

    @Autowired
    private UserService userService;

    @Autowired
    private SelectorControllerHelper helper;

    @GetMapping("/selectors")
    public ResponseEntity<List<SelectorDto>> getAllSelectors(){
        List<Selector> data = selectorService.getAllSelectors();
        List<Selector> rootSelectors = data.stream().filter(c -> c.getParentId() == 0).toList();
        List<SelectorDto> newData = new ArrayList<>();
        for (Selector sel : rootSelectors) {
            SelectorDto dto = new SelectorDto();
            dto.setId(sel.getId());
            dto.setName(sel.getName());
            if (sel.getParentId() == 0){
                if (data.stream().filter(c -> c.getParentId() == dto.getId()).count() > 0){
                    dto.setChildren(helper.getChildren(dto.getId(), data));
                }
            }
            newData.add(dto);
        }
        return ResponseEntity.ok().body(newData);
    }

    @PostMapping("/users")
    public ResponseEntity<User> createUser(@RequestBody User user){
        if (SelectorControllerHelper.isValidUser(user)){
            return ResponseEntity.ok().body(this.userService.createUser(user));
        }
        return ResponseEntity.badRequest().body(user);
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id, @RequestBody User user){
        user.setId(id);
        if (SelectorControllerHelper.isValidUser(user) && id != 0){
            return ResponseEntity.ok().body(this.userService.updateUser(user));
        }
        return ResponseEntity.badRequest().body(user);
    }



}
