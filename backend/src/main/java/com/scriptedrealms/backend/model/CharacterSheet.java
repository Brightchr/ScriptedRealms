package com.scriptedrealms.backend.model;

import jakarta.persistence.Embeddable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Embeddable
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CharacterSheet {

    private int speed;
    private int armorClass;

    @ElementCollection
    private List<String> proficiencies;

    @Embedded
    private Attributes attributes;

    @Embeddable
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Attributes {
        private int strength;
        private int dexterity;
        private int constitution;
        private int intelligence;
        private int wisdom;
        private int charisma;
    }
}
