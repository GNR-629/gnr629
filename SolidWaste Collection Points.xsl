<?xml version="1.0" encoding="UTF-8"?>
<xs:schema targetNamespace="http://ogr.maptools.org/" xmlns:ogr="http://ogr.maptools.org/" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:gml="http://www.opengis.net/gml" elementFormDefault="qualified" version="1.0">
<xs:import namespace="http://www.opengis.net/gml" schemaLocation="http://schemas.opengis.net/gml/2.1.2/feature.xsd"/>
<xs:element name="FeatureCollection" type="ogr:FeatureCollectionType" substitutionGroup="gml:_FeatureCollection"/>
<xs:complexType name="FeatureCollectionType">
  <xs:complexContent>
    <xs:extension base="gml:AbstractFeatureCollectionType">
      <xs:attribute name="lockId" type="xs:string" use="optional"/>
      <xs:attribute name="scope" type="xs:string" use="optional"/>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
<xs:element name="SolidWaste_Collection_Points" type="ogr:SolidWaste_Collection_Points_Type" substitutionGroup="gml:_Feature"/>
<xs:complexType name="SolidWaste_Collection_Points_Type">
  <xs:complexContent>
    <xs:extension base="gml:AbstractFeatureType">
      <xs:sequence>
        <xs:element name="geometryProperty" type="gml:PointPropertyType" nillable="true" minOccurs="0" maxOccurs="1"/>
        <xs:element name="Name" nillable="true" minOccurs="0" maxOccurs="1">
          <xs:simpleType>
            <xs:restriction base="xs:string">
              <xs:maxLength value="254"/>
            </xs:restriction>
          </xs:simpleType>
        </xs:element>
        <xs:element name="Waste_gene" nillable="true" minOccurs="0" maxOccurs="1">
          <xs:simpleType>
            <xs:restriction base="xs:long">
              <xs:totalDigits value="10"/>
            </xs:restriction>
          </xs:simpleType>
        </xs:element>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
</xs:schema>
