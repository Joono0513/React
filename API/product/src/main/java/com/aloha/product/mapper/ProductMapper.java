package com.aloha.product.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.product.dto.Product;

import java.util.List;

@Mapper
public interface ProductMapper {
    
    public List<Product> list() throws Exception;

    public Product select(String id) throws Exception;

    public int insert(Product product) throws Exception;

    public int update(Product product) throws Exception;

    public int delete(String id) throws Exception;
}
