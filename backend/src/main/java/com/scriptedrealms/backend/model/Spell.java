package com.scriptedrealms.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Spell {
 @Id
 @GeneratedValue
 private Long id;

 private boolean isRitual;
 private boolean isFocusSpell;
 private boolean isKnown;
 private boolean isPrepared;
 private boolean isFromSpellbook;

 @Temporal(TemporalType.TIMESTAMP) // Tracking for when a spell was last cast
 private Date lastCastTime;


 @ManyToOne
 @JoinColumn(name = "character_id", nullable = false)
 private PlayerCharacter character;

 @ManyToOne
 @JoinColumn(name = "template_id", nullable = false)
 private SpellTemplate template;

}
