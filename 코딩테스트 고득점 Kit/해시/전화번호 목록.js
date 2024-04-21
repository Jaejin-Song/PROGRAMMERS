function solution(phone_book) {
  const isExist = phone_book.sort().some((phone, index) => {
    if (index === phone_book.length - 1) return false;

    return phone_book[index + 1].startsWith(phone);
  });

  return !isExist;
}
