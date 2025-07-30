package com.scriptedrealms.backend.model;

import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private Boolean isAdmin;
    private Boolean isEnabled;
    private Boolean isAccountNonExpired;
    private Boolean isAccountNonLocked;
    private Boolean isCredentialsNonExpired;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<PlayerCharacter> characters;

    @OneToMany(mappedBy = "user")
    private List<Connection> connections;
}
