#include <ctype.h> 
#include <stdio.h>

int swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{

    char ch1[100], ch2[100];
    int arr[50][50];
    int testcase, test;

    int i, j, k, l, count1;
    int a, b, c, d, count2;

    scanf("%d\n", &testcase);

    for (test = 0; test < testcase; test++)
    {
        scanf("%s %s", ch1, ch2);
        k = 0;

        for (i = 0; ch1[i] != '\0'; i++)
        {
            l = 0;
            if (isalpha(ch1[i]) > 0)
            {
                for (j = i; j >= 0; j--)
                {
                    if (ch1[i] == ch1[j])
                    {
                        l++;
                    }
                }
                if (l == 1)
                {
                    arr[k][0] = ch1[i];
                    k++;
                }
            }
        }

        for (i = 0; i < k; i++)
        {
            count1 = 0;
            for (j = 0; ch1[j] != '\0'; j++)
            {

                if (arr[i][0] == ch1[j])
                {
                    count1++;
                }
            }

            arr[i][1] = count1;
        }

        c = 0;

        for (a = 0; ch2[a] != '\0'; a++)
        {
            d = 0;
            if (isalpha(ch2[a]) > 0)
            {
                for (b = a; b >= 0; b--)
                {
                    if (ch2[a] == ch2[b])
                    {
                        d++;
                    }
                }
                if (d == 1)
                {
                    arr[c][2] = ch2[a];
                    c++;
                }
            }
        }

        for (a = 0; a < c; a++)
        {
            count2 = 0;
            for (b = 0; ch2[b] != '\0'; b++)
            {

                if (arr[a][2] == ch2[b])
                {
                    count2++;
                }
            }

            arr[a][3] = count2;
        }

        for (i = 0; i < k - 1; i++)
        {
            for (j = 0; j < k - i - 1; j++)
            {
                if (arr[j][1] < arr[j + 1][1])
                {
                    swap(&arr[j][1], &arr[j + 1][1]);
                    swap(&arr[j][0], &arr[j + 1][0]);
                }
            }
        }

        for (a = 0; a < c - 1; a++)
        {
            for (b = 0; b < c - a - 1; b++)
            {
                if (arr[b][1] < arr[b + 1][1])
                {
                    swap(&arr[b][1], &arr[b + 1][1]);
                    swap(&arr[b][0], &arr[b + 1][0]);
                }
            }
        }
        for (i = 0; i < k; i++)
        {
            for (j = 0; j < arr[i][3]; j++)
            {
                printf("%c", arr[i][0]);
            }
        }
        printf("\n");
    }
    return 0;
}
