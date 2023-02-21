all: my_mastermind

my_ngram: my_mastermind.o
	gcc -o my_mastermind my_mastermind.o

my_ngram.o: my_mastermind.c
	gcc -c my_mastermind.c -o my_mastermind.o

clean:
	rm -f *.o my_mastermind

fclean: clean
	rm -f my_mastermind

re: fclean all