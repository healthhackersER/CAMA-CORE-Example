from flask import Flask
import math
import numpy
import os
import random


def gcd(a, b):
    while b!=0:
        a, b = b, a%b
    return a

def decrypt(pk, ciphertext):
    key, n = pk
    plain = [chr( (char ** key) % n) for char in ciphertext]
    return ''.join(plain)

def encrypt(pk, plaintext):
    key, n = pk
    cipher = [(ord(char) ** key) % n for char in plaintext]
    print(cipher)
    return cipher

def get_private_key(e, tot):
    k=1
    while (e*k)%tot != 1 or k == e:
        k+=1
    return k

def get_public_key(tot):
    e=2
    while e < tot and gcd(e, tot)!=1:
        e += 1
    return e

def check_prime(num):

    if num > 1:  
    
        for i in range(2,num):  
            if (num % i) == 0:  
                return False 
        
        return True  

    else:  
        return False

def find_prime(maximum=100):

    while(1):
        prime = random.randint(1, maximum)
         
        if check_prime(prime):
            return prime

def gen_prime_keys(maximum=100):
    p = find_prime(maximum)
    q = find_prime(maximum)
    print("p & q")
    print(p)
    print(q)
    n = p*q
    
    mul = (p-1)*(q-1)

    return n, mul

def gen_publickey(n, mul):

    e = get_public_key(mul)
    print("Public key(n, e):("+str(n)+","+str(e)+")")

    return e

def gen_privatekey(n, e, mul):

    d = get_private_key(e, mul)
    print("Private key(n, d):("+str(n)+","+str(d)+")")

    return d

def gen_encriptkey(e, n, m ):

    encrypted_msg = encrypt((e, n), m)
    return encrypted_msg

def gen_decriptkey(d, n, m):

    return decrypt((d, n),m)

app = Flask(__name__)

@app.route('/decript')
def get_realkey():

    return None

@app.route('/encript')
def get_enckey():

    return None

@app.route('/genkey')
def gen_key():

    return None

@app.route('/check')
def check_device():

    return None

@app.route('/<target>')
def routh_func(name):

    func = name
    return func()

if __name__ == '__main__':
    #app.run()
    m = "F2LWQR7FJWLM"

    print("RAW")
    print(m)
    n, mul = gen_prime_keys(1000)
    public = gen_publickey(n, mul)
    private = gen_privatekey(n, public, mul)

    print("ENC")
    m = gen_encriptkey(public, n, m )

    print("DEC")
    print(gen_decriptkey(private, n, m))
