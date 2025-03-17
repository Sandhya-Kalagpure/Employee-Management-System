package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "admin")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long adminID;

    @Column(name = "admin_name", nullable = false)
    private String adminName;

    @Column(name = "admin_password", nullable = false)
    private String adminPassword;
}
