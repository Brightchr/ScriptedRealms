package com.scriptedrealms.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Condition {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private Boolean isActive;
    private String source;

    private int duration;
    private int remainingDuration;

    @Temporal(TemporalType.TIMESTAMP)
    private Date appliedAt;


    @Enumerated(EnumType.STRING)
    private ConditionType conditionType;

    public enum ConditionType {
        BLINDED,
        CHARMED,
        DEAFENED,
        FRIGHTENED,
        GRAPPLED,
        INCAPACITATED,
        INVISIBLE,
        PARALYZED,
        PETRIFIED,
        POISONED,
        PRONE,
        RESTRAINED,
        STUNNED,
        UNCONSCIOUS
    }

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    private PlayerCharacter character;
}
