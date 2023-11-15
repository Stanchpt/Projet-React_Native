import React from 'react';
import { FlatList } from 'react-native';
import BookItem from './BookItem';

interface Book {
  id: number;
  title: string;
  reference: string;
}

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
  const renderItem = ({ item }: { item: Book }) => (
    <BookItem book={item} onDelete={onDelete} onEdit={onEdit} />
  );

  return (
    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default BookList;
