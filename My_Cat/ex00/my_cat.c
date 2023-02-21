#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <fcntl.h>

int main(int argc, char *argv[])
{
    int f1, ch1, x; 

    for (x = 1; x < argc; x++)
    {
        f1 = open(argv[x], O_RDONLY);
        
        while(read(f1, &ch1, 1) == 1)
        {
            putchar(ch1);
        }
    }
    close(f1);
    return(0);
}
          