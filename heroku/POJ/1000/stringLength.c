#include <stdio.h>
int main() {

    char str[] = "test";
    int i = 0;
    while (str[i] != '\0') {
        i++;
    }
    printf("\0");// nothing print
    printf("%d\n", i);


    return 0;
}