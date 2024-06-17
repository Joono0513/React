package com.aloha.product.dto;

import lombok.Data;
import java.util.Date;

@Data
public class Product {
    
    private int no;
    private String id;
    private String name;
    private int price;
    private String img;
    private Date created_at;
    private Date updated_at;
}
