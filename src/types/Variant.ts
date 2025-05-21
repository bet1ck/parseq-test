export interface HGVS {
	g: string;
	c: string | null;
	p: string | null;
  }
  
  export interface ExternalSourceEntry {
	annotationSourceType: string;
	annotationSourceName: string;
	annotationSourceVersion: string;
	annotationSourceIconText: string;
	annotationSourceGeneticVariantIdentifier: string;
	maybeAnnotationSourceGeneticVariantUrl?: string;
	annotationAttributes: { [key: string]: string };
  }
  
  export interface Variant {
	chrNumber: string;
	leftAnchorPosition: number;
	rightAnchorPosition: number;
	alleleSequence: string;
	hgvs: HGVS;
	genotype: string;
	significance: string;
	alleleName: string;
	externalSourceEntries: ExternalSourceEntry[] | null;
  }
  