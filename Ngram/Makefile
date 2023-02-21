all : my_ngram

my_ngram : my_ngram.o
	gcc -Wall -Wextra -Werror -o my_ngram my_ngram.o 

my_ngram.o : my_ngram.h my_ngram.c
	gcc -Wall -Wextra -Werror -c my_ngram.h my_ngram.c

clean:
	rm -f *.o 

fclean: clean
	rm -f my_ngram

re: fclean all
