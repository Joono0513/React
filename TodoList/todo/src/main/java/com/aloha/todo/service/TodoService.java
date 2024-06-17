package com.aloha.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aloha.todo.dto.Todo;

@Service
public interface TodoService {
    
    public List<Todo> list() throws Exception;

    public Todo select(int no) throws Exception;

    public Todo insert(Todo todo) throws Exception;

    public int update(Todo todo) throws Exception;

    public int delete(int no) throws Exception;

    public int updateAll(Todo todo) throws Exception;

    public int deleteAll() throws Exception;
}
