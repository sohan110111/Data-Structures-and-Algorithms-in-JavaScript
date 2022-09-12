#include <stdio.h>
int main() {

    char str[] = "te\"\"st";
    int i = 0;
    while (str[i] != '\0') {
        if (str[i] == '\"')
        {
            str[i] = '\'';// while string get double quote it replace to single quote
        }
        printf("%c", str[i]);
        i++;
    }
    printf("\0");// nothing print
    printf("\n%d\n", i); // string length print


    return 0;
}