#include "my_mastermind.h"
int main(int argc, char *argv[])
{
    int x, y, z, i, j, attempt, placed, misplaced;
    char *flag, *code, ch1, *string, *user;
    char *flag1 = "-c", *flag2 = "-t";
// checking for flags passed in to argv
    code = malloc(10);
    user = malloc(10);
    attempt = 10;
// generating random 4 random code
    srand(time(0));
    char pieces[8] = {'1','2','3','4','5','6','7','8'};
    char *str;
    str = malloc(5);
    for (int a = 0; a < 4; a++)
    {
        str[a] = pieces[rand() % (7 - 1 + 1) + 1];
    }
    code = str;
    

    if (argc > 1)
    {
        x = 0;
        flag = argv[1];
        if (flag[x] == flag1[x] && flag[1] == flag1[1] && argc > 2)
        {
            for (y = 2; y < argc; y++)
            {
                code = argv[y];
            }
        // checking flag for -t
        }
        else if (flag[x] == flag2[x] && flag[1] == flag2[1] && argc > 2)
        {
            y = 2;
            attempt = atoi(argv[y]);
        }
    }

    int t;
    // looping throught with number of attempts
    // for (t = 0; t < attempt; t++)
    // {
        z = 0;

    // reading user input from stdin and saving to a buffer
        printf("Will you find the secret code?\n");
        printf("Please enter a valid guess\n");
        while(read(STDIN_FILENO, &ch1, 1) > 0)
        {
            if(!ch1)
            {
                return (0);
            }
            else
            {
                user[z] = ch1;
                z++;
            }
        }
        // comparing user input with code
        int code_len, user_len;
        code_len = strlen(code);
        user_len = strlen(user);
        placed = 0;
        misplaced = 0;
        for (i = 0; i < 4; i++)
        {
            if (user[i] >= 48 && user[i] <= 56)
            {
                if (user[i] == code[i])
                {
                    placed++;
                }
                if (strchr(code, user[i]) && user[i] != code[i])
                {
                    misplaced++;
                }
                else if (placed == 4)
                {
                    printf("Congratz! You did it!\n");
                    return (0);
                }
            }
            else
            {
                printf("Wrong input!\n");
                return (0);
            }
            
        }
        
        printf("Well placed pieces: %d\n", placed);
        printf("Misplaced pieces: %d\n", misplaced);
    // }
    // return (0);

}