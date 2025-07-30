package com.scriptedrealms.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.util.UUID;

@Data
@Entity
@Table(name = "connection")
@AllArgsConstructor
@NoArgsConstructor
public class Connection {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private String ipAddress;
    private String userAgent;

    private Timestamp connectedAt;
    private Timestamp disconnectedAt;

    private Boolean isOnline;
    private String sessionToken;
}
