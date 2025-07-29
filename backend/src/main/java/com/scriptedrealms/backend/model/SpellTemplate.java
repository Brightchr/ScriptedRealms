package com.scriptedrealms.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SpellTemplate {

    @Id
    @GeneratedValue
    private Long id;

    private String description;
    private String castingTime;
    private String name;
    private String duration;
    private String range;

    private int level;
    private int actionCost;
    private int areaOfEffectRadius;

    @Enumerated(EnumType.STRING)
    private School school;

    @Enumerated(EnumType.STRING)
    private Effect effect;

    @Enumerated(EnumType.STRING)
    private DamageType damageType;

    @Enumerated(EnumType.STRING)
    private SpellComponents spellComponents;

    @Enumerated(EnumType.STRING)
    private AreaShape areaShape;

    // -------------------enums--------------------------
    public enum School {
        ABJURATION,
        CONJURATION,
        DIVINATION,
        ENCHANTMENT,
        EVOCATION,
        ILLUSION,
        NECROMANCY,
        TRANSMUTATION
    }

    public enum Effect {
        STUN,
        FEAR,
        PARALYZE,
        BLINDNESS,
        CURSE,
        DARKNESS,
        DEATH,
        DISPEL,
        HASTE,
        HEROISM,
        INVISIBILITY
    }

    public enum DamageType {
        ACID,
        BLUDGEONING,
        COLD,
        FIRE,
        FORCE,
        LIGHTNING,
        NECROTIC,
        PIERCING,
        POISON,
        PSYCHIC,
        RADIANT,
        SLASHING,
        THUNDER,
        NONE
    }

    public enum SpellComponents {
        VERBAL,
        SOUND,
        MATERIAL
    }

    public enum AreaShape {
        CIRCLE,
        SQUARE,
        SPHERE,
        TRIANGLE,
        RECTANGLE,
        CONE,
        NONE
    }
}