package com.scriptedrealms.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Spell {
   private String name;
    private int level;
    private String description;
    private boolean prepared;
}