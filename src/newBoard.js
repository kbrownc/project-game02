import React from 'react';

let newBoard = 
            [{boxContent: "Start", boxCol: 7, boxRow: 1},
            {boxCol: 7, boxRow: 2},
            {boxCol: 7, boxRow: 3},
            {boxCol: 7, boxRow: 4},
            {boxCol: 7, boxRow: 5, extraScore: 1},
            {boxCol: 7, boxRow: 6},
            {boxCol: 7, boxRow: 7},
            {boxCol: 7, boxRow: 8, itemsToDelete: 1, 
                                    itemsToAdd: [{boxCol: 6, boxRow: 8},
                                                  {boxCol: 5, boxRow: 8},
                                                  {boxCol: 4, boxRow: 8},
                                                  {boxCol: 4, boxRow: 9},
                                                  {boxCol: 4, boxRow: 10},
                                                  {boxCol: 5, boxRow: 10},
                                                  {boxCol: 6, boxRow: 10},]},
            {boxCol: 7, boxRow: 9},
            {boxCol: 7, boxRow: 10},
            {boxCol: 7, boxRow: 11},
            {boxCol: 7, boxRow: 12},
            {boxCol: 7, boxRow: 13},
            {boxCol: 7, boxRow: 14, extraScore: 1},
            {boxCol: 7, boxRow: 15},
            {boxCol: 7, boxRow: 16, extraScore: -1},
            {boxCol: 6, boxRow: 16},
            {boxCol: 5, boxRow: 16, itemsToDelete: 1, 
                                    itemsToAdd: [{boxCol: 5, boxRow: 15, extraScore: -1},
                                                  {boxCol: 5, boxRow: 14},
                                                  {boxCol: 5, boxRow: 13},
                                                  {boxCol: 4, boxRow: 13},
                                                  {boxCol: 3, boxRow: 13},
                                                  {boxCol: 3, boxRow: 14},
                                                  {boxCol: 3, boxRow: 15},]},
            {boxCol: 4, boxRow: 16, extraScore: 1},
            {boxCol: 3, boxRow: 16},
            {boxCol: 2, boxRow: 16},
            {boxCol: 1, boxRow: 16, extraScore: -1},
            {boxCol: 1, boxRow: 15},
            {boxCol: 1, boxRow: 14},
            {boxCol: 1, boxRow: 13},
            {boxCol: 1, boxRow: 12, extraScore: 1},
            {boxCol: 1, boxRow: 11},
            {boxCol: 1, boxRow: 10},
            {boxCol: 1, boxRow: 9},
            {boxCol: 1, boxRow: 8},
            {boxCol: 1, boxRow: 7},
            {boxCol: 1, boxRow: 6, itemsToDelete: 1, 
                                    itemsToAdd: [{boxCol: 2, boxRow: 6, extraScore: -1},
                                                  {boxCol: 3, boxRow: 6},
                                                  {boxCol: 4, boxRow: 6},
                                                  {boxCol: 4, boxRow: 5},
                                                  {boxCol: 4, boxRow: 4},
                                                  {boxCol: 3, boxRow: 4},
                                                  {boxCol: 2, boxRow: 4},]},
            {boxCol: 1, boxRow: 5, extraScore: 1},
            {boxCol: 1, boxRow: 4},
            {boxCol: 1, boxRow: 3},
            {boxCol: 1, boxRow: 2},
            {boxContent: "End", boxCol: 1, boxRow: 1}
];

export {newBoard};