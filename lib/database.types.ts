export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      cities: {
        Row: {
          id: number;
          name: string;
          province: string;
          region: string;
          budget: string;
          monthly_cost: number;
          image_url: string;
          description: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          province: string;
          region: string;
          budget: string;
          monthly_cost: number;
          image_url: string;
          description: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          province?: string;
          region?: string;
          budget?: string;
          monthly_cost?: number;
          image_url?: string;
          description?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      city_spots: {
        Row: {
          id: number;
          city_id: number;
          name: string;
          category: string;
          description: string;
          sort_order: number;
        };
        Insert: {
          id?: number;
          city_id: number;
          name: string;
          category: string;
          description: string;
          sort_order?: number;
        };
        Update: {
          id?: number;
          city_id?: number;
          name?: string;
          category?: string;
          description?: string;
          sort_order?: number;
        };
        Relationships: [];
      };
      city_cost_details: {
        Row: {
          city_id: number;
          housing: number;
          food: number;
          transport: number;
          etc: number;
        };
        Insert: {
          city_id: number;
          housing: number;
          food: number;
          transport: number;
          etc: number;
        };
        Update: {
          city_id?: number;
          housing?: number;
          food?: number;
          transport?: number;
          etc?: number;
        };
        Relationships: [];
      };
      city_environments: {
        Row: {
          city_id: number;
          environment: string;
        };
        Insert: {
          city_id: number;
          environment: string;
        };
        Update: {
          city_id?: number;
          environment?: string;
        };
        Relationships: [];
      };
      city_seasons: {
        Row: {
          city_id: number;
          season: string;
        };
        Insert: {
          city_id: number;
          season: string;
        };
        Update: {
          city_id?: number;
          season?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          id: string;
          city_id: number;
          user_id: string | null;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          city_id: number;
          user_id?: string | null;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          city_id?: number;
          user_id?: string | null;
          content?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      city_likes: {
        Row: {
          id: string;
          city_id: number;
          user_id: string;
          type: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          city_id: number;
          user_id: string;
          type: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          city_id?: number;
          user_id?: string;
          type?: string;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
