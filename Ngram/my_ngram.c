#include "my_ngram.h"
/**
 * sort_str - sorts a string in ascending order
 * @str: string to be sorted
 * Return: sorted string
 */
char *sort_str(char *str)
{
    int m, n, len;
    char ptr;
    char tmp = '"';
    len = strlen(str);
    for (m = 0; m < len; m++)
    {
        for (n = 0; n < len - 1; n++)
        {
            if (str[n] == tmp)
                break;
            if (str[n] > str[n + 1])
            {
                 ptr = str[n];
                 str[n] = str[n + 1];
                 str[n + 1] = ptr;
            }
         }
     }
    return (str);
}
/**
 * main - checks all characters passed into a string and returns the number of times they occur in ascending order
 * @argc: argument count
 * @argv: argument vector
 * Return: 0 success
 */
 int main(int argc, char **argv)
{
    int x, y, a, b, val, len1, len2;
    int count, i, j, k;
    int savelen, s;
    char *string, *save, *undup, ch, *ptr_save, *ptr_undup;
    //printf("%s\n", argv[1]);
    save = malloc(1000);
    count = 0;
    /* looping through argv */
    for (x = 1; x < argc; x++)
    {
        /* assing string to var*/
        string = argv[x];
        /*looping through all string in argv and save string*/
        for (y = 0; string[y] != '\0'; y++)
        {
            save[count] = string[y];
            count++;
        }
        savelen = strlen(save);
    }
    /* keeping original strings */
    undup = malloc(1000);
    for (s = 0; s < savelen; s++)
    {
        undup[s] = save[s];
    }
    /* remove duplicated string */
    for (i = 0; i < savelen; i++)
    {
        for (j = i + 1; j < savelen;)
        {
            if (save[i] == save[j])
            {
                for (k = j; k < savelen; k++)
                {
                    save[k] = save[k + 1];
                }
                savelen--;
            }
            else
            {
                j++;
            }
        }
    }
    /* counting occurance of string for below function*/
    len1 = strlen(undup);
    len2 = strlen(save);
    ptr_save = malloc(1000);
    ptr_undup = malloc(1000);
    ptr_save = sort_str(save);
    ptr_undup = sort_str(undup);
    for (a = 0; a < len2; a++)
    {
        val = 0;
        ch = ptr_save[a];
        for (b = 0; b < len1; b++)
        {
            if (ptr_undup[b] == ch)
            {
                val++;
            }
        }
         printf("%c:%d\n", ch, val);
    }
    free(save);
    free(ptr_save);
    free(undup);
    free(ptr_undup);
    }