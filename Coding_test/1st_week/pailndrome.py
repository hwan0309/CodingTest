input = "abcba"
#
# def is_palindrome(string):
#     n= len(string)
#     for i in range(n):
#         if string[i] != string[n - 1 - i]:
#             return False
#         return True



def palindrome(string):
    if string[0] !=string[-1]:
        return False
    if len(string) <= 1:
        return True
    return palindrome(string[1: -1])

print(palindrome(input))