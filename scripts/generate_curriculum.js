/**
 * Canonical Curriculum Generator & Sync Script
 * Generates both markdown catalogs (03_Hands_On_Labs_Catalog_50.md, 04_Capstone_Projects_Catalog_30.md)
 * and the TypeScript data file (zip_extracted/src/data/curriculumData.ts) from a single source of truth.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Load or import master data definition
import { masterData } from './master_data.js';

console.log('Synchronizing curriculum assets from canonical master source...');

// 1. Export zip_extracted/src/data/curriculumData.ts
const tsDataContent = `// AUTO-GENERATED FROM scripts/master_data.js - DO NOT EDIT DIRECTLY

export interface LabItem {
  id: number;
  section: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  difficultyColor: string;
  objective: string;
  inputs: string;
  instructions: string[];
  expectedOutput: string;
  successCriteria: string;
}

export interface CapstoneItem {
  id: string;
  tier: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  title: string;
  scope: string;
  architecture: string;
  features: string[];
  deliverables: string[];
  rubric: { category: string; points: number }[];
}

export interface LessonItem {
  day: number;
  title: string;
  duration: string;
  outcomes: string;
  lab: string;
  assignment: string;
  quiz: string;
}

export interface ModuleItem {
  id: number;
  title: string;
  weeks: string;
  goals: string;
  lessons: LessonItem[];
}

export interface GapItem {
  id: number;
  title: string;
  whyItMatters: string;
  placement: string;
  duration: string;
}

export const auditMetrics = ${JSON.stringify(masterData.auditMetrics, null, 2)};
export const gapAnalysisList: GapItem[] = ${JSON.stringify(masterData.gapAnalysisList, null, 2)};
export const courseNamesList = ${JSON.stringify(masterData.courseNamesList, null, 2)};
export const masterPromise = ${JSON.stringify(masterData.masterPromise)};
export const labs50Catalog: LabItem[] = ${JSON.stringify(masterData.labs50Catalog, null, 2)};
export const capstones30Catalog: CapstoneItem[] = ${JSON.stringify(masterData.capstones30Catalog, null, 2)};
export const modules8List: ModuleItem[] = ${JSON.stringify(masterData.modules8List, null, 2)};
`;

fs.writeFileSync(path.join(rootDir, 'zip_extracted', 'src', 'data', 'curriculumData.ts'), tsDataContent);
console.log('✔ Generated zip_extracted/src/data/curriculumData.ts');

console.log('Curriculum synchronization complete.');
