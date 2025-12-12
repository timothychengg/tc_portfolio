'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  ColorSchemeId,
  colorSchemes,
  defaultColorScheme,
} from '@/lib/colorSchemes';

interface ColorSchemeContextType {
  currentScheme: ColorSchemeId;
  setColorScheme: (scheme: ColorSchemeId) => void;
  applyColorScheme: (scheme: ColorSchemeId) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
  undefined
);

export function ColorSchemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentScheme, setCurrentScheme] =
    useState<ColorSchemeId>(defaultColorScheme);

  const applyColorScheme = (scheme: ColorSchemeId) => {
    const schemeData = colorSchemes[scheme];
    const root = document.documentElement;

    // Apply primary colors
    Object.entries(schemeData.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value);
    });

    // Apply accent colors
    Object.entries(schemeData.accent).forEach(([key, value]) => {
      root.style.setProperty(`--color-accent-${key}`, value);
    });

    // Apply background
    root.style.setProperty('--color-background', schemeData.background);

    // Update body background
    document.body.style.backgroundColor = schemeData.background;
  };

  useEffect(() => {
    // Load saved scheme from localStorage
    const savedScheme = localStorage.getItem('colorScheme') as ColorSchemeId;
    const scheme =
      savedScheme && colorSchemes[savedScheme]
        ? savedScheme
        : defaultColorScheme;
    setCurrentScheme(scheme);
    applyColorScheme(scheme);
  }, []);

  const setColorScheme = (scheme: ColorSchemeId) => {
    setCurrentScheme(scheme);
    localStorage.setItem('colorScheme', scheme);
    applyColorScheme(scheme);
  };

  return (
    <ColorSchemeContext.Provider
      value={{ currentScheme, setColorScheme, applyColorScheme }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}
