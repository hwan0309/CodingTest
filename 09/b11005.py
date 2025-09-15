n, b = map(int, input().split())
digits = []
while n > 0:
    r = n % b
    if r < 10:
        digits.append(str(r))
    else:
        digits.append(chr(r + 55))
    n //= b

print(''.join(reversed(digits)))
