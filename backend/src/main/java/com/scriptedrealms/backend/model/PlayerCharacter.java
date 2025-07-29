package com.scriptedrealms.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity // flags it to be added to db by Hibernate
@Table(name = "characters") // registers table name
@Data // creates getters/setters
@Builder
@NoArgsConstructor // creates no param constructor
@AllArgsConstructor // creates constructor with all params
public class PlayerCharacter {
  @Id // registers as a primary key
  @GeneratedValue(strategy = GenerationType.IDENTITY) // tells db to generate the id automatically
  private Long id;
  private String name;
  private int level;
  private String characterClass;
  private int maxHp;
  private int currentHp;

  @Embedded // treat CharacterSheet as part of this table
  private CharacterSheet sheet;

  @ManyToOne
  @JoinColumn(name = "user_id", nullable = false)
  private User user;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "character_id") // foreign key in items table
  private List<Item> inventory;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "character_id") // foreign key in spells table
  private List<Spell> spells;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "character_id") // foreign key in conditions table
  private List<Condition> conditions;

  private int gold;
  private int xp;
}
