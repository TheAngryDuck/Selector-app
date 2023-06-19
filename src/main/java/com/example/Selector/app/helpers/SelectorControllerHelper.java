package com.example.Selector.app.helpers;

import com.example.Selector.app.Dto.SelectorDto;
import com.example.Selector.app.entity.Selector;
import com.example.Selector.app.entity.User;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

@Service
@Transactional
public class SelectorControllerHelper {

    public List<SelectorDto> getChildren(long id, List<Selector> selectors){
        List<Selector> data = selectors.stream().filter(c -> c.getParentId() == id).toList();
        List<SelectorDto> children = new ArrayList<>();
        for (Selector child : data) {
            SelectorDto dto = new SelectorDto();
            dto.setId(child.getId());
            dto.setName(child.getName());
            dto.setParentId(id);
            Stream<Selector> dataTmp = selectors.stream().filter(c -> c.getParentId() == dto.getId());
            if (dataTmp.count() > 0){
                dto.setChildren(getChildren(dto.getId(), selectors));
            }
            children.add(dto);
        }
        return children;
    }

    public static boolean isValidUser(User user){
        if (isNullOrWhitespace(user.getName()) &&
                user.getAgreeTermsConditions() &&
                user.getSelectors() != null &&
                user.getSelectors().length != 0){
            return true;
        }
        return false;
    }

    public static boolean isNullOrWhitespace(String s) {
        return s == null || isWhitespace(s);

    }

    private static boolean isWhitespace(String s) {
        int length = s.length();
        if (length > 0) {
            for (int i = 0; i < length; i++) {
                if (!Character.isWhitespace(s.charAt(i))) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
