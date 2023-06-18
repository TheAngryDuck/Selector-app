package com.example.Selector.app.service;

import com.example.Selector.app.Interface.ISelectorRepository;
import com.example.Selector.app.Interface.ISelectorService;
import com.example.Selector.app.entity.Selector;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class SelectorService implements ISelectorService {

    @Autowired
    private ISelectorRepository selectorRepository;

    @Override
    public List<Selector> getAllSelectors() {
        return this.selectorRepository.findAll();
    }

}
