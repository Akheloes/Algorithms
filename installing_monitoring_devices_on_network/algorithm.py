"""
Write the classes serving the representation of the problem. These classes are:
    - Segment;
    - Network
"""
class Segment:
    def __init__(self, first_end, second_end):
        self.first_end = first_end
        self.second_end = second_end

    def __str__(self):
        return '[ ' + self.first_end + ' , ' + self.second_end + ' ]' 

class Network:
    def __init__(self, segments):
        self.segments = segments

    def __str__(self):
        network = ''
        for segment in self.segments:
            network += segment.__str__() + ' '
        return network

segments = [Segment('A', 'B'), Segment('A', 'C')]
network = Network(segments)
print(str(network))