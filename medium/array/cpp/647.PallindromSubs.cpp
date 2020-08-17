#include <cstdlib>
#include <string>
#include <vector>
class Solution
{
public:
    int countSubstrings(string s)
    {
        int len = s.length();
        vector<vector<int>> matrix(len);
        for (int i = 0; i < len; i++)
        {
            matrix[i].resize(len);
        }

        int count = 0;
        for (int i = 0; i < len; i++)
        {
            matrix[i][i] = 1;
            count++;
        }
        for (int col = 1; col < len; col++)
        {
            for (int row = 0; row < col; row++)
            {
                if (row == col - 1 && s[row] == s[col])
                {
                    matrix[col][row] = 1;
                    count++;
                }
                else if (matrix[col - 1][row + 1] == 1 && s[col] == s[row])
                {
                    matrix[col][row] = 1;
                    count++;
                }
            }
        }
        return count;
    }
};