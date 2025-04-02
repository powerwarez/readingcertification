import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('SUPABASE_URL과 SUPABASE_ANON_KEY 환경 변수가 필요합니다');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getBooks = async () => {
  const { data, error } = await supabase
    .from('readingcertification')
    .select('*');
  
  if (error) throw error;
  return data;
};

export const getBookById = async (id: string) => {
  const { data, error } = await supabase
    .from('readingcertification')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

export const createBook = async (book: any) => {
  const { data, error } = await supabase
    .from('readingcertification')
    .insert(book)
    .select();
  
  if (error) throw error;
  return data;
};

export const updateBook = async (id: string, book: any) => {
  const { data, error } = await supabase
    .from('readingcertification')
    .update(book)
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data;
};

export const deleteBook = async (id: string) => {
  const { error } = await supabase
    .from('readingcertification')
    .delete()
    .eq('id', id);
  
  if (error) throw error;
  return true;
};
